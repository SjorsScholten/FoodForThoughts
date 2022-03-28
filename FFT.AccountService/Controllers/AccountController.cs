using FFT.AccountService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FFT.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly Services.AccountService m_AccountService;

        public AccountController(Services.AccountService accountService)
        {
            m_AccountService = accountService;
        }

        [HttpGet]
        public async Task<List<Account>> GetAccountsAsync() =>
            await m_AccountService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Account>> GetAccountAsync(string id)
        {
            var account = await m_AccountService.GetAsync(id);

            if(account is null)
            {
                return NotFound();
            }

            return account;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccountAsync(Account newAccount)
        {
            await m_AccountService.CreateAsync(newAccount);

            return CreatedAtAction(nameof(GetAccountAsync), new { id = newAccount.Id }, newAccount);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateAccountAsync(string id, Account updatedAccount)
        {
            var account = await m_AccountService.GetAsync(id);

            if(account is null)
            {
                return NotFound();
            }

            updatedAccount.Id = account.Id;

            await m_AccountService.UpdateAsync(id, updatedAccount);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeleteAccountAsync(string id)
        {
            var account = await m_AccountService.GetAsync(id);

            if (account is null)
            {
                return NotFound();
            }

            await m_AccountService.RemoveAsync(id);

            return NoContent();
        }
    }
}
