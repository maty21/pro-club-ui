FROM hkube/base-node:v1.0.0
LABEL maintainer="maty zisserman"
WORKDIR /pro-club-ui
ADD . .
RUN npm install
ENTRYPOINT [ "npm","start" ]