#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["./FFT.Gateway.csproj", "FFT.Gateway/"]
RUN dotnet restore "FFT.Gateway/FFT.Gateway.csproj"
COPY [".", "./FFT.Gateway"]
WORKDIR "/src/FFT.Gateway"
RUN dotnet build "FFT.Gateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FFT.Gateway.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FFT.Gateway.dll"]