package com.revature.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TASK")
public class Task implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "T_ID")
	private int tId;

	@Column(name = "T_COMPLETE")
	private int tComplete;

	@Column(name = "T_INFO")
	private String tInfo;
	

	@ManyToOne
	@JoinColumn(name = "C_ID")
	private Card taskCard;

	public Task() {
		super();
	}
	

	public Task(String tInfo) {
		super();
		this.tInfo = tInfo;
	}


	public Task(int tId, int tComplete, String tInfo, Card taskCard) {
		super();
		this.tId = tId;
		this.tComplete = tComplete;
		this.tInfo = tInfo;
		this.taskCard = taskCard;
	}

	
	
	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	public int gettComplete() {
		return tComplete;
	}

	public void settComplete(int tComplete) {
		this.tComplete = tComplete;
	}

	public String gettInfo() {
		return tInfo;
	}

	public void settInfo(String tInfo) {
		this.tInfo = tInfo;
	}

	public Card getTaskCard() {
		return taskCard;
	}

	public void setTaskCard(Card taskCard) {
		this.taskCard = taskCard;
	}

}