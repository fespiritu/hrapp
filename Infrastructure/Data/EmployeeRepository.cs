using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
  public class EmployeeRepository : IEmployeeRepository
  {
    private readonly HumanResourcesContext _context;
    public EmployeeRepository(HumanResourcesContext context)
    {
      _context = context;
    }

    public async Task<Employee> GetEmployeeByIdAsync(int id)
    {
      return await _context.Employees.FindAsync(id);
    }

    public async Task<IReadOnlyList<Employee>> GetEmployeesAsync()
    {
      return await _context.Employees.ToListAsync();
    }
  }
}