using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FFT.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpGet]
        public async Task<IActionResult> GetAccounts()
        {
            return Ok("get accounts from service");
        }
    }
}
