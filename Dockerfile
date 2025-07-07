FROM --platform=linux/amd64 node:20-bullseye-slim

WORKDIR /app

COPY . .

RUN yarn config set registry https://registry.npmmirror.com/
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]
