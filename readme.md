## Creating Project Structure Using CLI

Step 1 - dotnet new sln <br>
Step 2 - dotnet new webapi -n API <br>
Step 3 - dotnet new classlib -n Application <br>
Step 4 - dotnet new classlib -n Domain <br>
Step 5 - dotnet new classlib -n Persistence <br>

## Adding SLN in root solution file

Step 1 - dotnet sln add API/API.csproj <br>
Step 2 - dotnet sln add Application<br>
Step 3 - dotnet sln add Domain<br>
Step 4 - dotnet sln add Persistence<br>

## To See dotnet sln listing

- dotnet sln list<br>

## Adding dependencies within each project

- cd {folder_name}<br>
- dotnet add reference ../Application<br>

## Dotnet ef tool version

-dotnet tool install --global dotnet-ef --version 5.0.1<br>
-dotnet tool list --global<br>

## migration cli

dotnet ef migrations add InitialCreate -p Persistence/ -s API/<br>

## Creating React App

-npx create-react-app client-app --use-npm --template typescript
