# Build steps
FROM node:alpine AS build
WORKDIR /build

COPY . .

RUN yarn install
RUN yarn build

# Runtime steps
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /build/dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]