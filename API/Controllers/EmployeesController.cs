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
  public class EmployeesController : BaseApiController
  {
    private readonly IGenericRepository<Employee> _repo;
    public EmployeesController(IGenericRepository<Employee> repo)
    {
      _repo = repo;

    }

    [HttpGet]
    public async Task<ActionResult<List<Employee>>> GetEmployees()
    {
      var employees = await _repo.ListAllAsync();
      return Ok(employees);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Employee>> GetEmployee(int id)
    {
      return Ok(await _repo.GetByIdAsync(id));
    }
  }
}