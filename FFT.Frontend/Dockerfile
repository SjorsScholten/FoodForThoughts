FROM node:lts-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ["./FFT.Frontend/package.json", "."]
COPY ["./FFT.Frontend/package-lock.json", "."]
RUN npm install

COPY ["./FFT.Frontend", "."]

CMD ["npm", "start"]