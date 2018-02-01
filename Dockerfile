FROM node:7.10.1

WORKDIR /frontend-static

# TODO: in prod version localtunnel must be removed and contentful CMS should be configured additional webhook
# with prod URL
RUN npm install -g localtunnel
RUN npm install --global gatsby-cli

COPY package.json /frontend-static
RUN npm install

COPY . /frontend-static

RUN gatsby build

CMD ["sh", "dockerCmd.sh"]
