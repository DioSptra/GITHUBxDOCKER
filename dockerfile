FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Kalau pakai Vite build, bisa: npm run build
# Tapi kalau jalanin server, biasanya npm start

CMD ["npm", "run", "start"]

EXPOSE 3000
