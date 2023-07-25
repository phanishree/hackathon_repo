npm install

echo '\n ---- CODE GENERATION IN PROGRESS ---- \n '
node index.js doc
echo '\n ---- COMPLETED CODE GENERATION ---- \n '
echo '\n ---- REDIRECTING TO SERVER CODE ---- \n '
cd /Users/garumugam/Desktop/Syna_API
npm install
echo '\n ---- TESTING IN PROGRESS ---- \n '
mocha stage2Test.js
exit 0