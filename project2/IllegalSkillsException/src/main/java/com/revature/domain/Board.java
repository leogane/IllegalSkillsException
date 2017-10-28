package com.revature.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="BOARD")
public class Board implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="B_ID")
	private int bId;
	
//	@Column(name="TV2_ID")
//	private int tv2Id;
	
	@Column(name="B_TITLE")
	private String bTitle;
	
	@Column(name="TOTAL")
	private int total;
	
	@ManyToOne
	@JoinColumn(name="TV2_ID")
	private TV2User boardUser;
	
	@OneToMany(mappedBy = "laneBoard", fetch = FetchType.EAGER)
	Set<Lane> lanes = new HashSet<Lane>();

	public Board() {
		super();
	}

//	public Board(int bId, int tv2Id, String bTitle, int total, TV2User boardUser, Set<Lane> lanes) {
//		super();
//		this.bId = bId;
//		this.tv2Id = tv2Id;
//		this.bTitle = bTitle;
//		this.total = total;
//		this.boardUser = boardUser;
//		this.lanes = lanes;
//	}

	
	public int getbId() {
		return bId;
	}

	public Board(int bId, String bTitle, int total, TV2User boardUser, Set<Lane> lanes) {
		super();
		this.bId = bId;
		this.bTitle = bTitle;
		this.total = total;
		this.boardUser = boardUser;
		this.lanes = lanes;
	}

	public void setbId(int bId) {
		this.bId = bId;
	}

//	public int getTv2Id() {
//		return tv2Id;
//	}
//
//	public void setTv2Id(int tv2Id) {
//		this.tv2Id = tv2Id;
//	}

	public String getbTitle() {
		return bTitle;
	}

	public void setbTitle(String bTitle) {
		this.bTitle = bTitle;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public TV2User getBoardUser() {
		return boardUser;
	}

	public void setBoardUser(TV2User boardUser) {
		this.boardUser = boardUser;
	}

	public Set<Lane> getLanes() {
		return lanes;
	}

	public void setLanes(Set<Lane> lanes) {
		this.lanes = lanes;
	}

//	@Override
//	public String toString() {
//		return "Board [bId=" + bId + ", bTitle=" + bTitle + ", total=" + total + ", boardUser=" + boardUser + ", lanes="
//				+ lanes + "]";
//	}

//	@Override
//	public String toString() {
//		return "Board [bId=" + bId + ", tv2Id=" + tv2Id + ", bTitle=" + bTitle + ", total=" + total + ", boardUser="
//				+ boardUser + ", lanes=" + lanes + "]";
//	}
	
	
	
}
