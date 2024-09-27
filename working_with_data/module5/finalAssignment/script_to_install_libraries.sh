# here, we need to install the specific version as mentioned in the starter code (version "~10.3.0", because in newer versions SQLite.openDatabase is depracated
npm install expo-sqlite@~10.3.0
npm install react-native-paper
# Doesn't work, it won't run any queries in the database (saying " ERROR  TypeError: Cannot read property 'exec' of undefined, js engine: hermes)"

# just run 
npm install package.json from the starter code
npm install react-native@0.69.9
# nope, that doesn't work, it gives 115 error again

# Also just copying the node_modules from the working SQLite app gives the same " ERROR  TypeError: Cannot read property 'exec' of undefined, js engine: hermes"."
