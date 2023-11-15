{
  description = "Website for Ox Games";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
  };

  outputs = inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system:
      let pkgs = (import (inputs.nixpkgs) { config = {allowUnfree = true;}; system =
              "x86_64-linux";
                  });
      in {
        devShell = pkgs.mkShell {
          buildInputs=[
            pkgs.nodejs_20
          ];
        };
      }
    );
}
