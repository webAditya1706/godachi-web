#!/bin/sh

rm -rf .next

npm run build

xcopy //e //h //y //z //d //exclude:exclusionList.txt "..\frontend" "..\Production\frontend" 