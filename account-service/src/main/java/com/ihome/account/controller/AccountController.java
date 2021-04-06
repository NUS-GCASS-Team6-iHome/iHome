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

    @PostMapping("/")
    public Account saveAccount( @RequestBody Account account) {
        log.info("AccountController saveAccount()");
        return accountService.saveAccount(account);
    }

    @GetMapping("/{id}")
    public Account findByAccountId(@PathVariable("id") Integer accountId) {
        log.info("AccountController findAccountById()");
        return accountService.findByAccountId(accountId);
    }
}
