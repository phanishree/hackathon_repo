npm install

echo '\n ---- CODE GENERATION IN PROGRESS ---- \n '
node index.js
echo '\n ---- COMPLETED CODE GENERATION ---- \n '
echo '\n ---- REDIRECTING TO SERVER CODE ---- \n '
cd /Users/gokulvaradan/Desktop/Syna_API
npm install
echo '\n ---- TESTING IN PROGRESS ---- \n '
mocha unitTest.js
exit 0