using FFT.PostService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FFT.PostService
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly Services.PostService m_PostService;

        public PostController(Services.PostService postService)
        {
            m_PostService = postService;
        }

        [HttpGet]
        public async Task<List<Post>> GetPostsAsync() =>
            await m_PostService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Post>> GetPostAsync(string id)
        {
            var post = await m_PostService.GetAsync(id);

            if(post is null)
            {
                return NotFound();
            }

            return post;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePostAsync(Post newPost)
        {
            await m_PostService.CreateAsync(newPost);

            return CreatedAtAction(nameof(GetPostAsync), new { id = newPost.Id }, newPost);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdatePostAsync(string id, Post updatedAccount)
        {
            var account = await m_PostService.GetAsync(id);

            if (account is null)
            {
                return NotFound();
            }

            updatedAccount.Id = account.Id;

            await m_PostService.UpdateAsync(id, updatedAccount);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeletePostAsync(string id)
        {
            var account = await m_PostService.GetAsync(id);

            if (account is null)
            {
                return NotFound();
            }

            await m_PostService.RemoveAsync(id);

            return NoContent();
        }
    }
}
