FROM node:15.13-alpine
WORKDIR /ip_locator
ENV PATH="./node_modules/.bin:$PATH"
COPY . . 
RUN npm run build
CMD ["ts-node", "server.ts"]