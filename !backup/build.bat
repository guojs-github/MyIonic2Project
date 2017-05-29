start cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore myionic2project-release-key.keystore android-release-unsigned.apk myionic2
del MyIonic2Project.apk
D:\android\sdk\build-tools\25.0.3\zipalign -v 4 android-release-unsigned.apk MyIonic2Project.apk
pause
