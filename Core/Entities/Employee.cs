using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class Employee : BaseEntity
    {
        
        [StringLength(30)]
        public string FirstName { get; set; }
        [StringLength(30)]
        public string LastName { get; set; }
        [StringLength(50)]
        public string Address1 { get; set; }
        [StringLength(50)]
        public string Address2 { get; set; }
        [StringLength(60)]
        public string City { get; set; }
        [StringLength(2)]
        public string State { get; set; }
        [StringLength(15)]
        public string ZipCode { get; set; }
        [StringLength(100)]
        public string Role { get; set; }
        [StringLength(200)]
        public string Department { get; set; }
        [StringLength(1000)]
        public string SkillSets { get; set; }
        public DateTime DateOfBirth { get; set; }

        public DateTime DateOfJoining { get; set; }
        public bool IsActive { get; set; }

    }
}