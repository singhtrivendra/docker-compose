FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:1234@postgres:5432/postgres"

# Don't run migrations at build time (requires a live DB); run them separately during deployment or startup
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
