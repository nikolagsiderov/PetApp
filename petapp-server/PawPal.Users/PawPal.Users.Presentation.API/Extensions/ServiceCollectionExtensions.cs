using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MongoDB.Driver;
using PawPal.Users.Core.Contracts;
using PawPal.Users.Core.Options;
using PawPal.Users.Infrastructure;
using PawPal.Users.Infrastructure.Repositories;
using PawPal.Users.Services.Services;
using System.Reflection;

namespace PawPal.Users.Presentation.API.ServiceExtensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddMongoDb(this IServiceCollection services, IConfiguration configuration)
        {
            var mongoDbOptions = configuration.GetSection(MongoDbOptions.SectionKey).Get<MongoDbOptions>();

            services.AddSingleton<IMongoClient>(provider => new MongoClient(mongoDbOptions!.ReadWriteConnectionString));

            services.AddSingleton(provider =>
            {
                var client = provider.GetRequiredService<IMongoClient>();
                return client.GetDatabase(mongoDbOptions!.DatabaseName);
            });

            services.AddDbContext<MongoDbContext>(options =>
            {
                options.UseMongoDB(mongoDbOptions!.ReadWriteConnectionString, mongoDbOptions!.DatabaseName);
            });

            return services;
        }

        /// <summary>Configure dependency injection for Repositories.</summary>
        public static void AddRepositoriesConfiguration(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        }

        /// <summary>Configure dependency injection for Services.</summary>
        public static void AddServicesConfiguration(this IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddScoped<IUsersContextService, UsersContextService>();
            services.AddScoped<IUsersService, UsersService>();
        }

        public static void AddPawPalUsersApIVersioning(this IServiceCollection services)
        {
            services.AddApiVersioning(
                options =>
                {
                    options.ReportApiVersions = true;
                    options.DefaultApiVersion = new ApiVersion(1, 0);
                });
            services.AddVersionedApiExplorer(
                options =>
                {
                    options.GroupNameFormat = "'v'VVV";
                    options.SubstituteApiVersionInUrl = true;
                });
        }

        public static void AddCustomSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.UseInlineDefinitionsForEnums();
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });

                options.AddSecurityDefinition(name: "Bearer", securityScheme: new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Description = "Enter the generated user token.",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Id = "Bearer",
                                Type = ReferenceType.SecurityScheme,
                            },
                        },
                        new List<string>()
                    },
                });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);

                options.IncludeXmlComments(xmlPath);
            });
        }

        public static void AddOptions(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<MongoDbOptions>(configuration.GetSection(MongoDbOptions.SectionKey));
        }
    }
}
