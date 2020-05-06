install-js:
	echo "Downloading packages dependencies"
	rm -rf node_modules
	yarn cache clean
	yarn
install-ios:
	echo "Downloading iOS dependencies"
	rm -rf node_modules
	rm -rf ios/Pods
	rm -rf ios/Podfile.lock
	rm -rf ios/build
	yarn install
	yarn jetify
	cd ios && pod repo update
	cd ios && pod install
	react-native start --reset-cache
install-android:
	echo "Downloading Android dependencies"
	rm -rf node_modules
	rm -rf android/.gradle
	rm -rf android/build
	yarn install
	yarn jetify
	cd android && ./gradlew clean
	cd android && ./gradlew :app:dependencies
	react-native start —reset-cache
