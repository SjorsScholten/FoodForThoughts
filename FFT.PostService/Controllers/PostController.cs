using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FFT.PostService
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            return Ok("Get posts from service");
        }
    }
}
