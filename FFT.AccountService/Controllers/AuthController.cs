using FFT.AccountService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace FFT.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly Services.AuthService? m_AuthService;
        private readonly Services.AccountService? m_AccountService;

        public AuthController(Services.AuthService authService, Services.AccountService accountService){
            m_AuthService = authService;
            m_AccountService = accountService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthData>> Login(Account account){
            var user = await m_AccountService.GetByEmailAsync(account.Email);
            
            if(user == null) {
                return BadRequest("username not found");
            }

            if(!m_AuthService.VerifyPassword(account.Password, user.Password)){
                return BadRequest("password not found");
            }

            return m_AuthService.GetAuthData(user.Id);
        }

        [HttpPost("Register")]
        public async Task<ActionResult<AuthData>> Register(Account account){
            var emailUnique = await m_AccountService.IsEmailUnique(account.Email);
            if(!emailUnique)
                return BadRequest($"email unique: {emailUnique}");
            
            var nameUnique = await m_AccountService.IsNameUnique(account.AccountName);
            if(!nameUnique)
                return BadRequest($"name unique: {nameUnique}");

            account.Id = Guid.NewGuid().ToString();
            account.Password = m_AuthService.HashPassword(account.Password);
            m_AccountService.CreateAsync(account);

            return m_AuthService.GetAuthData(account.Id);
        }
    }
}