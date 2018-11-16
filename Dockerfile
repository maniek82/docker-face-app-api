FROM node:10.13.0

WORKDIR /usr/src/smart-brain-docker

COPY ./ ./

RUN npm install
CMD ["/bin/bash"]
