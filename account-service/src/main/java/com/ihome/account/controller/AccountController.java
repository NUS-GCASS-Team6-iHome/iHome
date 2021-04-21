package com.ihome.account.controller;

import com.ihome.account.entity.Account;
import com.ihome.account.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
@Slf4j
public class AccountController {

    @Autowired
    private AccountService accountService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/")
    public Account saveAccount( @RequestBody Account account) {
        log.info("AccountController saveAccount()");
        return accountService.saveAccount(account);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{username}")
    public Account findByUsername(@PathVariable("username") String username) {
        log.info("AccountController findByUsername()");
        return accountService.findByUsername(username);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/")
    private Account updateAccount(@RequestBody Account account)
    {
        log.info("AccountController updateAccount()");
        return accountService.updateAccount(account);
    }
}
