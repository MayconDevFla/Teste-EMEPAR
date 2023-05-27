FROM node:12-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache python2 g++ make
RUN yarn install --production
ENV API_URL=http://localhost:8080
CMD ["node", "src/app/app.component.html"]
EXPOSE 3000