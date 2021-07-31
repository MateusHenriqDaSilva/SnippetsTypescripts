# Execucao rapida para testes

## instalando typescript
npm install typescript
## testar a aplicacao
tsc app.ts
node app.js

# Em producao para desenvolver
npm init //iniciar o projeto
npm install –save-dev typescript
npx tsc -init

# adicione o seguinte codigo dentro do tsconfig.json
{
 "compilerOptions": {
 ...lots of compiler options...
 },
 "include": [ "src/**/*" ]
}

# bibliotecas typescript
npm install --save emailjs-imap-client
npm install --save express
npm install --save mailparser
npm install --save nedb
npm install --save nodemailer
npm install --save-dev @types/express

# adicionando types 
npm install --save-dev @types/mailparser
npm install --save-dev @types/nedb
npm install --save-dev @types/node
npm install --save-dev @types/nodemailer

# executa aplicacao via terminal
node ./dist/main.js

# coloque o seguinte codigo dentro do packpage.json
scripts: { "compile" : "npx tsc && node ./dist/main.js" }

# instale o pacote nodemon 
npm install --save-dev nodemon

# para executar a aplicacao
node ./node_modules/nodemon/bin/nodemon.js ./dist/main.js

# coloque os scripts dentro do packpage json
"scripts": {
 "compile": "npx tsc && node ./dist/main.js",
 "dev": "node ./node_modules/nodemon/bin/nodemon.js -e ts --exec \"npm run 
compile\""
}
