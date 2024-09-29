FROM node:18-alpine
COPY public/ public
COPY src/ src
COPY package.json package.json
COPY tsconfig.json tsconfig.json
RUN npm install
CMD ["npm", "start"]