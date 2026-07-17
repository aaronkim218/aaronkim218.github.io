{
  description = "aaronkim218.github.io dev environment (vite + react + ts)";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:
    let
      pkgs = nixpkgs.legacyPackages.aarch64-darwin;
    in {
      devShells.aarch64-darwin.default = pkgs.mkShell {
        packages = [ pkgs.nodejs_24 pkgs.pnpm ];
      };
    };
}
