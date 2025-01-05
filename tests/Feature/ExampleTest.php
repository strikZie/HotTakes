<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use MongoDB\Driver\Session;
use Tests\TestCase;

class ExampleTest extends TestCase
{

    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_post_can_be_created_as_user(): void
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->post(route('post.create'), [
                'title' => 'test post',
                'content' => 'this is post content',
                'user_id' => $user->id,
            ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/');

        $user->refresh();

        //$this->assertSame('Test User', $user->name);
        //$this->assertSame('test@example.com', $user->email);
        //$this->assertNull($user->email_verified_at);

        $this->assertEquals(\Illuminate\Support\Facades\Session::get('success'), 'Post successfully created!');
    }
}
