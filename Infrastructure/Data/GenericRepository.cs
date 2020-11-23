using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Infrastructure.Data
{
  public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
  {
    private readonly HumanResourcesContext _context;
    public GenericRepository(HumanResourcesContext context)
    {
      _context = context;

    }
    public async Task<T> GetByIdAsync(int id)
    {
      return await _context.Set<T>().FindAsync(id);
    }

    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
      return await _context.Set<T>().ToListAsync();
    }

    public void Update(T item) {
      _context.Update(item);
    }
    public void Add(T item) {
      _context.Add(item);
    }
    public void Delete(T item) {
      _context.Remove(item);
    }

    public bool Save() {
      return _context.SaveChanges() >= 0;
    }
    // public T Edit(T item) {
    //   return _context.Set<T>().Update(item);
    // }
    // public string Delete(int id) {

    // }
  }
}