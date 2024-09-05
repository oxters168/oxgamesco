{
  description = "An example of Napalm with flakes";

	inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
		napalm.url = "github:nix-community/napalm";
  };

  outputs = { self, nixpkgs, flake-utils, napalm }:
		flake-utils.lib.eachDefaultSystem (system:
			let
				pkgs = nixpkgs.legacyPackages."${system}";

				buildInputs = [
					pkgs.nodejs_18
				];
				oxgamesco-node-modules = napalm.legacyPackages."${system}".buildPackage ./. {
					nodejs = pkgs.nodejs_18;
				};
			in
			{
				packages.default = with oxgamesco-node-modules; pkgs.stdenv.mkDerivation {
					name = "oxgamesco-website";
          src = ./.;

          inherit buildInputs;

          buildPhase = ''
						export NG_CLI_ANALYTICS="false"
						cp -r ${oxgamesco-node-modules}/_napalm-install/* ./
            npm run build
          '';

          installPhase = ''
            mkdir -p $out
            cp -r dist/browser/* $out/
          '';
				};
				devShells.default = pkgs.mkShell {
					inherit buildInputs;
				};
			}
		);
}
