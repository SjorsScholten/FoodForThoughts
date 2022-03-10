using Microsoft.AspNetCore.Mvc;

namespace FFT.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpGet]
        public string GetAccounts()
        {
            return "a list of accounts";
        }
    }
}
