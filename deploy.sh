echo "Deploying changes..."
# Pull changes from the live branch
git checkout live

git pull

# Build the image with the new changes
docker build . -t vzlomed/vzlomed

# Shut down the existing containers
docker-compose down

# Start the new containers
docker-compose up -d
echo "Deployed!"