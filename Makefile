test:
	npm test

test-cov:
	./node_modules/istanbul/lib/cli.js cover -- ./node_modules/mocha/bin/_mocha -R spec
	#./node_modules/istanbul/lib/cli.js check-coverage --statements=100 --functions=100 --branches=100 --lines=100

ci:
	make test-cov
	#./node_modules/.bin/jshint *.*


.PHONY: test test-cov ci
