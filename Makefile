all:
	echo ### INSTALLATION DE NodeJS####
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

	sudo apt install -y nodejs

	echo ### NPM ANGULAR CLI ###
	npm install -g @angular/cli

	echo ### INSTALLATION DES MODULES ###
	npm install

	clean_full:
		rm -rf node_modules
	clean:
		rm -rf dist/ pub/
