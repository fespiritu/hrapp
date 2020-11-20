
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using Core.Entities;

namespace Infrastructure.Data
{
    public class HumanResourcesContext : DbContext
    {
        public HumanResourcesContext(DbContextOptions<HumanResourcesContext> options) : base(options)
        {
            
        }

        public DbSet<Employee> Employees { get; set; }
    }
}