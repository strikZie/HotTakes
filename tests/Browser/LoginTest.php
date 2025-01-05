<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     */
    use DatabaseMigrations;

    public function testSignup(): void
    {
        $user = User::factory()->create();

        $this->browse(function (Browser $browser) {
            // Navigate to the login page
            $browser->visit('/register') // Adjust this URL to match your app
            ->assertSee('Register') // Ensure the page has "Login" text
            ->type('name', 'test')
            ->type('username', 'test')
            ->type('email', 'test@example.com')// Type the email or username
            ->type('password', 'password') // Type the password
            ->type('password_confirmation', 'password') // Type the password
            ->press('Register') // Click the login button
            ->assertPathIs('/') // Ensure the user is redirected (adjust as needed)
            ->assertSee('Test User'); // Ensure the home page shows profile name shows relevant content
        });
    }
}
