#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["FFT.FollowService/FFT.FollowService.csproj", "FFT.FollowService/"]
RUN dotnet restore "FFT.FollowService/FFT.FollowService.csproj"
COPY . .
WORKDIR "/src/FFT.FollowService"
RUN dotnet build "FFT.FollowService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FFT.FollowService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FFT.FollowService.dll"]