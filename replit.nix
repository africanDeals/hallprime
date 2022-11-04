{ pkgs }: {
	deps = [
		pkgs.lsof
  pkgs.remind
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}