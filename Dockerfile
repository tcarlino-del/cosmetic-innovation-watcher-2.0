cat > Dockerfile << 'EOF'
FROM apify/actor-node:20

COPY package*.json ./
COPY . ./

RUN npm install

CMD ["node", "main.js"]
EOF
