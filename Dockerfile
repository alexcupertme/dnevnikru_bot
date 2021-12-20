#
# ---- Base Node ----
FROM mhart/alpine-node:latest as base
RUN apk add nodejs-current tini
WORKDIR /root/chat

ENTRYPOINT ["/sbin/tini", "--"]

COPY package.json .
 
#
# ---- Dependencies ----
FROM base AS dependencies

RUN npm set progress=false && npm config set depth 0 && npm config set unsafe-perm true
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules

#
# ---- Release ----
FROM base AS release
COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
COPY . .
CMD [ "node", "dist/main.js" ]