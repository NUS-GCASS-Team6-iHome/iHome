package com.ihome.account.service;

import com.ihome.account.entity.Account;
import com.ihome.account.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account saveAccount(Account account) {
        log.info("AccountService saveAccount()");
        return accountRepository.save(account);
    }

    public Account findByAccountId(Integer accountId) {
        log.info("AccountService findAccountById()");
        return accountRepository.findByAccountid(accountId);
    }
}
