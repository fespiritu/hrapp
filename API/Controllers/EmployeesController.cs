using System.Collections.Generic;
using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Core.Interfaces;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class EmployeesController : ControllerBase
  {
    private readonly IEmployeeRepository _repo;
    public EmployeesController(IEmployeeRepository repo)
    {
      _repo = repo;


    }

    [HttpGet]
    // public ActionResult<List<Employee>> GetEmployees()
    // {
    //   var employees = _context.Employees.ToList();
    //   return Ok(employees);
    // }
    public async Task<ActionResult<List<Employee>>> GetEmployees()
    {
      var employees = await _repo.GetEmployeesAsync();
      return Ok(employees);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Employee>> GetEmployee(int id)
    {
      return Ok(await _repo.GetEmployeeByIdAsync(id));
    }
  }
}