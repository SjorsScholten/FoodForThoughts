docker network create --driver bridge fft-network

cd FFT.AccountService
docker-compose up -d --build
cd ..

cd FFT.PostService
docker-compose up -d --build
cd ..

cd FFT.Gateway
docker-compose up -d --build
cd ..