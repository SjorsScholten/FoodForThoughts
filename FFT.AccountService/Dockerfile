#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["./FFT.AccountService.csproj", "FFT.AccountService/"]
RUN dotnet restore "FFT.AccountService/FFT.AccountService.csproj"
COPY [".", "./FFT.AccountService"]
WORKDIR "/src/FFT.AccountService"
RUN dotnet build "FFT.AccountService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FFT.AccountService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FFT.AccountService.dll"]