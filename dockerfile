FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Kalau pakai Vite build, bisa: npm run build
RUN npm run build
# Tapi kalau jalanin server, biasanya npm start

CMD ["node", "serve.js"]

EXPOSE 3000
