using System.Collections.Generic;
using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class EmployeesController : ControllerBase
  {
    private readonly HumanResourcesContext _context;
    public EmployeesController(HumanResourcesContext context)
    {
      _context = context;

    }

    [HttpGet]
    public ActionResult<List<Employee>> GetEmployees()
    {
      var employees = _context.Employees.ToList();
      return Ok(employees);
    }
    // public async Task<ActionResult<List<Employee>>> GetEmployees()
    // {
    //   var employees = await _context.Employees.ToListAsync();
    //   return Ok(employees);
    // }

    [HttpGet("{id}")]
    public ActionResult<Employee> GetEmployee(int id)
    {
      return Ok(_context.Employees.Find(id));
    }
  }
}